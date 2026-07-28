import React, { useMemo } from "react";

import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import CardProposed from "../../../components/CardProposed";
import CardTreatment from "../../../components/CardTreatment";

import { treatment } from "../../../data/treatment";

const TreatmentListPartial = ({ specialization }) => {
  const isDesktop = useMediaQuery("(min-width: 992px)");

  const filteredTreatments = useMemo(
    () =>
      treatment.filter((item) => item.specialization?.includes(specialization)),
    [specialization],
  );

  const CardComponent = isDesktop ? CardTreatment : CardProposed;

  return (
    <Box className="card-wrapper treatment view">
      {filteredTreatments.map((item) => (
        <CardComponent
          key={item.id}
          cardImage={item.images?.[0]?.src}
          cardTitle={item.title}
          cardDescription={item.description}
          cardPath={item.path}
        />
      ))}
    </Box>
  );
};

export default TreatmentListPartial;
