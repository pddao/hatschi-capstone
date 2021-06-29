import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';
import usePollenDetails from '../hooks/usePollenDetails';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    width: 370,
    height: 370,
    padding: '5px',
  },
});

export default function DictionaryPollenItemDetails() {
  const { id } = useParams();
  const { pollenDetails } = usePollenDetails(id);
  const classes = useStyles();

  return (
    <div>
      <h2>{pollenDetails.englishName}</h2>
      <Carousel className={classes.carousel} autoPlay={false} animation="slide">
        <div>
          <img src={pollenDetails.firstPicUrl} className={classes.img} />
        </div>
        <div>
          <img src={pollenDetails.secondPicUrl} className={classes.img} />
        </div>
        <div>
          <img src={pollenDetails.thirdPicUrl} className={classes.img} />
        </div>
      </Carousel>

      <section className={classes.root}>
        <p>
          <b>Latin name:</b> <br />
          {pollenDetails.latinName} <br />
        </p>
        <p>
          <b>Blooming season: </b> <br />
          {pollenDetails.beginBloomingSeason?.nameOfMonth}-
          {pollenDetails.endBloomingSeason?.nameOfMonth}
          <br />
        </p>
        <p>
          <b>Distribution: </b>
          <br />
          {pollenDetails.description}
          <br />
        </p>
      </section>
    </div>
  );
}
