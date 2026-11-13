-- ============================================================================
-- Small Business Website: Supabase PostgreSQL Schema & Row Level Security
-- ============================================================================
-- Run this script in the Supabase SQL Editor for your project.
-- It creates the `contact_messages` table and enforces strict RLS policies
-- so public visitors can submit enquiries without reading or modifying
-- other customers' submissions.
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL CHECK (char_length(btrim(full_name)) BETWEEN 2 AND 120),
  email TEXT NOT NULL CHECK (char_length(btrim(email)) BETWEEN 5 AND 254),
  subject TEXT NOT NULL CHECK (char_length(btrim(subject)) BETWEEN 2 AND 200),
  message TEXT NOT NULL CHECK (char_length(btrim(message)) BETWEEN 10 AND 5000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for chronological administrative review
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
  ON public.contact_messages (created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Remove any pre-existing policies before recreating
DROP POLICY IF EXISTS "Allow public enquiry submissions" ON public.contact_messages;

-- Public visitors (anon & authenticated) may ONLY insert new enquiries.
-- They cannot SELECT, UPDATE, or DELETE any rows.
CREATE POLICY "Allow public enquiry submissions"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(btrim(full_name)) >= 2
    AND char_length(btrim(email)) >= 5
    AND char_length(btrim(subject)) >= 2
    AND char_length(btrim(message)) >= 10
  );

-- Ensure explicit privileges match RLS intent
REVOKE ALL ON TABLE public.contact_messages FROM anon, authenticated;
GRANT INSERT ON TABLE public.contact_messages TO anon, authenticated;

