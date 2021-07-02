import { useParams } from 'react-router-dom';
import usePollenDetails from '../hooks/usePollenDetails';
import { makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles({
  root: {
    width: 450,
    height: 450,
    justifyContent: 'space-around',
  },

  img: {
    width: '330px',
  },

  '& .CarouselItem': {
    justifyContent: 'space-around',
  },

  '& .makeStyles-description-31': {
    justifyContent: 'center',
  },
});

export default function DictionaryPollenItemDetails() {
  const classes = useStyles();
  const { id } = useParams();
  const { pollenDetails } = usePollenDetails(id);

  return (
    <div>
      <h2>{pollenDetails.englishName}</h2>

      <Carousel autoPlay={false} animation="slide" className={classes.root}>
        <div>
          <img src={pollenDetails.firstPicUrl} className={classes.img} alt="" />
        </div>
        <div>
          <img
            src={pollenDetails.secondPicUrl}
            className={classes.img}
            alt=""
          />
        </div>
        <div>
          <img src={pollenDetails.thirdPicUrl} className={classes.img} alt="" />
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
