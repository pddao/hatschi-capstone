import { useParams } from 'react-router-dom';
import usePollenDetails from '../hooks/usePollenDetails';
import { makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles({
  carousel: {
    width: 370,
    height: 420,
  },
  img: {
    width: 370,
    height: 370,
    margin: '5px',
    justifyItems: 'center',
  },
  englishName: {
    textTransform: 'capitalize',
  },
});

export default function DictionaryDetailsPage() {
  const classes = useStyles();
  const { id } = useParams();
  const { pollenDetails } = usePollenDetails(id);

  return (
    <div>
      <h1 className={classes.englishName}>{pollenDetails.id}</h1>

      <Carousel autoPlay={false} animation="slide" className={classes.carousel}>
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

      <section className={classes.details}>
        <h3>English name:</h3>
        <p className={classes.englishName}>{pollenDetails.id}</p>
        <h3>Latin name:</h3>
        <p>{pollenDetails.latinName}</p>
        <h3>Blooming season: </h3>
        <p>
          {pollenDetails.beginBloomingSeason?.nameOfMonth}-
          {pollenDetails.endBloomingSeason?.nameOfMonth}
        </p>
        <h3>Description: </h3>
        <p> {pollenDetails.description}</p>
      </section>
    </div>
  );
}
