import React from "react";
import heroImage from "../../assets/images/banner.png";

export default function HeroSection() {
  return (
    <div
      className="relative w-full min-h-[600px] bg-cover bg-center py-8 flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-opacity-50 text-white p-6 rounded-lg max-w-4xl">
        <p className="text-center text-3xl leading-relaxed">
          Books are the most silent of companions, always present, never
          intrusive, their wisdom unfolding with each turn of the type. They are
          the counsellors who never tire, offering guidance when sought, their
          answers always measured and profound. Patient as the sea, they will
          wait without impatience, teaching us with a quiet persistence, their
          lessons as enduring as time itself.
        </p>
      </div>
    </div>
  );
}
