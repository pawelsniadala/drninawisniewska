import React, { useEffect } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

import CardTeam from "../../../components/CardTeam";
import CardTeamProposed from "../../../components/CardTeamProposed";

import { team } from "../../../data/team";

const specializationSlugs = {
  dermatology: "dermatologia",
  "aesthetic-medicine": "medycyna-estetyczna",
  cosmetology: "kosmetologia",
  "cosmetic-surgery": "chirurgia-plastyczna",
  allergology: "alergologia",
  usg: "usg",
  endocrinology: "endokrynologia",
  gynecology: "ginekologia",
  "vascular-surgery": "chirurgia-naczyniowa",
  "clinical-dietitian": "dietetyka-kliniczna",
  cardiology: "kardiologia",
  psychiatry: "psychiatria",
  psychology: "psychologia",
  "medical-registration": "rejestracja-medyczna",
};

const SpecialistsListPartial = ({ specialization }) => {
  const isDesktop = useMediaQuery("(min-width: 991.98px)");

  const specialists = team.filter((item) =>
    item.specialization.includes(specialization),
  );

  const specializationSlug = specializationSlugs[specialization];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [specialization]);

  return (
    <Box className="card-wrapper team view">
      {specialists.map((item) => {
        const specialistPath = `/specjalisci/${specializationSlug}/${item.specialist}`;

        return isDesktop ? (
          <CardTeam
            key={item.id}
            cardImage={item.image}
            cardBackground={item.background}
            cardTitle={item.name}
            cardName={item.name}
            cardSpeciality={item.speciality}
            cardDescription={item.experience || item.education}
            cardPath={specialistPath}
          />
        ) : (
          <CardTeamProposed
            key={item.id}
            cardTitle={item.name}
            cardSpeciality={item.speciality}
            cardExperience={
              item.experience ||
              item.education || (
                <>
                  <br />
                  <br />
                </>
              )
            }
            cardImage={item.image}
            cardPath={specialistPath}
          />
        );
      })}
    </Box>
  );
};

export default SpecialistsListPartial;
