import { useParams } from 'react-router-dom';
import usePollenDetails from '../hooks/usePollenDetails';
import { Fab, makeStyles, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
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
  fab: {
    position: 'fixed',
    top: 85,
    right: 30,
    color: 'white',
  },
});

export default function DictionaryDetailsPage() {
  const classes = useStyles();
  const { id } = useParams();
  const { pollenDetails } = usePollenDetails(id);

  const handleClick = () => {};

  return (
    <div>
      <h1 className={classes.englishName}>{pollenDetails.id}</h1>

      <Tooltip title="Add to allergies list" aria-label="add to allergies list">
        <Fab
          size="small"
          color="primary"
          className={classes.fab}
          onClick={handleClick}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Carousel autoPlay={false} animation="slide" className={classes.carousel}>
        <div>
          <img
            src={pollenDetails.firstPicUrl}
            className={classes.img}
            alt="first in carousel"
          />
        </div>
        <div>
          <img
            src={pollenDetails.secondPicUrl}
            className={classes.img}
            alt="second in carousel"
          />
        </div>
        <div>
          <img
            src={pollenDetails.thirdPicUrl}
            className={classes.img}
            alt="third in carousel"
          />
        </div>
      </Carousel>

      <section className={classes.details}>
        <h3>English name:</h3>
        <p className={classes.englishName}>{pollenDetails.id}</p>
        <h3>German name:</h3>
        <p>{pollenDetails.germanName}</p>
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
