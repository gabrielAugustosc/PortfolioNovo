import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import "../styles/SkillsCarousel.css";

/**
 * SkillsCarousel - 3D carousel for skills/tools icons
 * @param {Object[]} items - Array of objects with src and alt for images
 */
export default function SkillsCarousel({ items }) {
  const [active, setActive] = useState(0);
  const total = items.length;

  // Handlers
  const next = useCallback(
    () => setActive((prev) => (prev + 1) % total),
    [total],
  );
  const prev = useCallback(
    () => setActive((prev) => (prev - 1 + total) % total),
    [total],
  );

  // Memoize carousel items for performance
  const renderedItems = useMemo(
    () =>
      items.map((img, idx) => {
        const angle = (idx - active) * 60;
        const isActive = idx === active;
        return (
          <div
            key={`${img.alt}-${idx}`}
            className={`carousel-item${isActive ? " active" : ""}`}
            style={{
              transform: `rotateY(${angle}deg) translateZ(300px)`,
              opacity: isActive ? 1 : 0.6,
              zIndex: isActive ? 2 : 1,
            }}
            aria-hidden={!isActive}
          >
            <img src={img.src} alt={img.alt} className="carousel-img" />
            <span className="carousel-label">{img.alt}</span>
          </div>
        );
      }),
    [items, active],
  );

  return (
    <div
      className="skills-carousel-container"
      role="region"
      aria-label="Skills Carousel"
    >
      <button
        className="carousel-arrow left"
        onClick={prev}
        aria-label="Anterior"
        type="button"
      >
        &lt;
      </button>
      <div className="carousel">{renderedItems}</div>
      <button
        className="carousel-arrow right"
        onClick={next}
        aria-label="Próximo"
        type="button"
      >
        &gt;
      </button>
    </div>
  );
}

SkillsCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
