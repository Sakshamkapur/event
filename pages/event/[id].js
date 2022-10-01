import { useRouter } from "next/router";
import { useMemo } from "react";
import { Calendar } from "../../assets/icons/calendar";
import { Location } from "../../assets/icons/location";
import {
  Banner,
  Grid,
  Container,
  Details,
  Title,
  Text,
} from "../../shared/styles";
import { useStore } from "../../store";

const EventDetailSection = ({ icon, title, subtitle }) => {
  return (
    <Details>
      {icon}
      <Grid>
        <Text size={16} isBold>
          {title}
        </Text>
        <Text size={14} weight={300}>
          {subtitle}
        </Text>
      </Grid>
    </Details>
  );
};

const Event = () => {
  const router = useRouter();
  const { id } = router.query;
  const { events } = useStore((state) => ({ events: state.events }));
  const data = events[id];

  return (
    <div>
      <Banner maxWidth={400}>
        <img src={data?.image || "/images/birthday-cake.png"} />
      </Banner>
      <Title>{data?.name || "Birthday Bash"}</Title>
      <p>Hosted by {data?.hostName || "Elysia"}</p>
      <EventDetailSection
        icon={<Calendar />}
        title="18 August 6:00PM"
        subtitle="to 19 August 1:00PM UTC +10"
      />
      <EventDetailSection
        icon={<Location />}
        title="Street name"
        subtitle="Suburb, State, Postcode"
      />
    </div>
  );
};

export default Event;
