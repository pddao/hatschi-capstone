import { useParams } from 'react-router-dom';
import usePollenDetails from '../hooks/usePollenDetails';
import { makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles({
  img: {
    width: 370,
    height: 370,
    padding: '5px',
  },

  description: {},
});

export default function DictionaryPollenItemDetails() {
  const classes = useStyles();
  const { id } = useParams();
  const { pollenDetails } = usePollenDetails(id);

  return (
    <div>
      <h2>{pollenDetails.englishName}</h2>

      <Carousel autoPlay={false} animation="slide">
        <div>
          <img
            src={pollenDetails.firstPicUrl}
            className={classes.img}
            alt="first picture in carousel"
          />
        </div>
        <div>
          <img
            src={pollenDetails.secondPicUrl}
            className={classes.img}
            alt="second picture in carousel"
          />
        </div>
        <div>
          <img
            src={pollenDetails.thirdPicUrl}
            className={classes.img}
            alt="third picture in carousel"
          />
        </div>
      </Carousel>

      <section className={classes.description}>
        <p>
          <b>Latin name:</b> <br />
          {pollenDetails.latinName}
        </p>
        <p>
          <b>Blooming season: </b> <br />
          {pollenDetails.beginBloomingSeason?.nameOfMonth}-
          {pollenDetails.endBloomingSeason?.nameOfMonth}
        </p>
        <p>
          <b>Distribution: </b> <br />
          {pollenDetails.description}
        </p>
      </section>
    </div>
  );
}
