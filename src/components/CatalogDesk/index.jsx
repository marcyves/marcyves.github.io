import { useMemo, useState } from "react";
import PropTypes from "prop-types";

import ListeCours from "../ListeCours";
import liste_parcours from "../../data/parcours.json";
import liste_plateformes from "../../data/plateformes.json";

import "./index.css";

function parcoursLabel(title) {
  return title.replace(/^Parcours\s+/i, "");
}

function FilterGroup({ legend, value, onChange, options }) {
  return (
    <div className="catalog-filter-group" role="group" aria-label={legend}>
      <h3>{legend}</h3>
      {options.map((option) => (
        <button
          type="button"
          key={option.id}
          className="catalog-filter-option"
          aria-pressed={value === option.id}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

FilterGroup.propTypes = {
  legend: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

function CatalogDesk({ courses, initialParcours, initialPlatform }) {
  const [parcoursId, setParcoursId] = useState(initialParcours || "all");
  const [platformId, setPlatformId] = useState(initialPlatform || "all");

  const visible = useMemo(
    () =>
      courses.filter((cours) => {
        const parcoursOk = parcoursId === "all" || cours.parcours === parcoursId;
        const platformOk = platformId === "all" || cours.platform === platformId;
        return parcoursOk && platformOk;
      }),
    [courses, parcoursId, platformId]
  );

  const parcoursOptions = [
    { id: "all", label: "Tous" },
    ...liste_parcours.map((item) => ({
      id: item.id,
      label: parcoursLabel(item.title),
    })),
  ];

  const platformOptions = [
    { id: "all", label: "Tous" },
    ...liste_plateformes.map((item) => ({
      id: item.id,
      label: item.title,
    })),
  ];

  const countLabel =
    visible.length === 1 ? "1 cours" : `${visible.length} cours`;

  return (
    <section className="catalog-desk">
      <aside className="catalog-filters">
        <FilterGroup
          legend="Parcours"
          value={parcoursId}
          onChange={setParcoursId}
          options={parcoursOptions}
        />
        <FilterGroup
          legend="Plateforme"
          value={platformId}
          onChange={setPlatformId}
          options={platformOptions}
        />
      </aside>
      <div className="catalog-results">
        <p className="catalog-count" aria-live="polite">
          {countLabel}
        </p>
        {visible.length > 0 ? (
          <ListeCours liste_cours={visible} />
        ) : (
          <p className="catalog-empty">
            Aucun cours pour ce filtre. Choisissez Tous pour revoir le
            catalogue.
          </p>
        )}
      </div>
    </section>
  );
}

CatalogDesk.propTypes = {
  courses: PropTypes.array.isRequired,
  initialParcours: PropTypes.string,
  initialPlatform: PropTypes.string,
};

export default CatalogDesk;
