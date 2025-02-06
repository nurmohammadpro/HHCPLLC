import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Card from "../Card";

const MagicalTherapy = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex flex-col px-2 gap-6 max-w-[1280px] mx-auto">
        <h2 className="font-primary font-bold text-4xl lg:text-6xl my-8">
          Magical Therapy for the People
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card
            icon={PsychologyIcon}
            title="Depression Problems"
            description="Depression is a mood disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in daily activities."
            linkTitle="Read More"
            linkIcon={<ArrowForwardIcon />}
            linkPath="/depressionTherapy"
          />
          <Card
            icon={PeopleAltIcon}
            title="Couple Counseling"
            description="Couple counseling provides a safe and confidential space where partners can openly express their thoughts, feelings, and concerns."
            linkTitle="Read More"
            linkIcon={<ArrowForwardIcon />}
            linkPath="/depressionTherapy"
          />
          <Card
            icon={FavoriteIcon}
            title="Dating & Relation"
            description="It involves active listening, expressing thoughts and feelings openly, and navigating challenges through constructive dialogue."
            linkTitle="Read More"
            linkIcon={<ArrowForwardIcon />}
            linkPath="/depressionTherapy"
          />
        </div>
      </div>
    </div>
  );
};

export default MagicalTherapy;
