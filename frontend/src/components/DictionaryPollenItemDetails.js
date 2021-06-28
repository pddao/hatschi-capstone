import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';
import usePollenDetails from '../hooks/usePollenDetails';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  carousel: {
    maxHeight: 600,
  },
});
export default function DictionaryPollenItemDetails() {
  const { id } = useParams();
  const { pollenDetails } = usePollenDetails(id);
  const classes = useStyles();

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <h2>{pollenDetails.englishName}</h2>
      <Carousel className={classes.carousel} autoPlay={false} animation="slide">
        <div>
          <img src={pollenDetails.firstPicUrl} />
        </div>
        <div>
          <img src={pollenDetails.secondPicUrl} />
        </div>
        <div>
          <img src={pollenDetails.thirdPicUrl} />
        </div>
      </Carousel>

      <section className="description">
        <b>Latin name:</b> <br />
        {pollenDetails.latinName} <br />
        <b>Blooming season: </b> <br />
        {pollenDetails.beginBloomingSeason?.nameOfMonth}-
        {pollenDetails.endBloomingSeason?.nameOfMonth}
        <br />
        <b>Distribution: </b>
        <br />
        {pollenDetails.description}
        <br />
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  font-size: medium;

  description {
    margin: 5px;
    padding: 5px;
  }

  img {
    padding: 5px;
    width: 100%;
  }
`;
