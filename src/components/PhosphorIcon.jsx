import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  ClipboardText,
  Clock,
  Compass,
  EnvelopeSimple,
  House,
  MapPin,
  PaperPlaneTilt,
  Phone,
  SlidersHorizontal,
  Stack,
  Sun,
  WarningCircle,
} from '@phosphor-icons/react';

const ICON_MAP = {
  compass: Compass,
  'check-circle': CheckCircle,
  sliders: SlidersHorizontal,
  home: House,
  layers: Stack,
  briefcase: Briefcase,
  sun: Sun,
  clipboard: ClipboardText,
  mail: EnvelopeSimple,
  phone: Phone,
  'map-pin': MapPin,
  clock: Clock,
  'arrow-right': ArrowRight,
  send: PaperPlaneTilt,
  'alert-circle': WarningCircle,
};

export default function PhosphorIcon({
  name,
  size = 18,
  weight = 'light',
  className = '',
}) {
  const IconComponent = ICON_MAP[name] || Compass;
  return <IconComponent size={size} weight={weight} className={className} aria-hidden="true" />;
}

