import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Layout from '../components/Layout';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ServicesPage from '../pages/ServicesPage';
import * as contactService from '../services/contactService';

function renderWithRouter(initialEntries = ['/']) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </MemoryRouter>,
  );
}

describe('Crestline Home & Interior Services Website', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    sessionStorage.clear();
  });

  it('renders Home page with hero, reasons, intro, services, and CTA', () => {
    renderWithRouter(['/']);
    expect(
      screen.getByRole('heading', { name: /Spaces Shaped Around How You Live/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Honest Materials' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Services/i })).toHaveAttribute(
      'href',
      '/services',
    );
  });

  it('navigates between primary pages and toggles mobile menu', () => {
    renderWithRouter(['/']);
    const toggleBtn = screen.getByRole('button', { name: /Toggle navigation/i });
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(screen.getAllByRole('link', { name: 'About' })[0]);
    expect(screen.getByRole('heading', { name: /^About$/i })).toBeInTheDocument();
    expect(screen.getByText(/Our Mission/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Vision/i)).toBeInTheDocument();
  });

  it('filters services by category and pre-fills contact subject on enquire', () => {
    renderWithRouter(['/services']);
    expect(screen.getByRole('heading', { name: /^Services$/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Design' }));
    expect(screen.getByText('Interior Design & Planning')).toBeInTheDocument();
    expect(screen.queryByText('Kitchen & Home Renovations')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'All' }));
    expect(screen.getByText('Kitchen & Home Renovations')).toBeInTheDocument();

    const enquireLinks = screen.getAllByRole('link', { name: /^Enquire$/i });
    fireEvent.click(enquireLinks[0]);

    expect(screen.getByRole('heading', { name: /Send a Message/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toHaveValue('Enquiry: Interior Design & Planning');
  });

  it('validates contact form fields and email format', async () => {
    renderWithRouter(['/contact']);
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    expect(await screen.findByText(/Please enter your full name/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter a subject/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your message/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'invalid-email' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    expect(await screen.findByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  it('submits valid enquiry and shows success feedback', async () => {
    const submitSpy = vi.spyOn(contactService, 'submitContactEnquiry').mockResolvedValue({
      ok: true,
      savedToDatabase: true,
      emailNotified: false,
      message: 'Thank you! Your enquiry has been saved and our team will be in touch soon.',
    });

    renderWithRouter(['/contact']);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'Jane Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'jane@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Subject/i), {
      target: { value: 'Service Request' },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: 'Hello, I would like to learn more about your services.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => {
      expect(submitSpy).toHaveBeenCalledTimes(1);
    });
    expect(
      await screen.findByText(/Thank you! Your enquiry has been saved/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/i)).toHaveValue('');
  });

  it('renders 404 page for unknown routes', () => {
    renderWithRouter(['/non-existent-page']);
    expect(screen.getByRole('heading', { name: /Page Not Found/i })).toBeInTheDocument();
  });
});
