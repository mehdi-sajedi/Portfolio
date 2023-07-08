import { Link } from 'react-scroll';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const CustomLink = ({ id, duration, offset, className, children }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Link
      to={id}
      href={`#${id}`}
      smooth='easeInOutCubic'
      duration={prefersReducedMotion ? 0 : duration}
      className={className}
      offset={offset}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
