import { useParams } from 'react-router-dom';
import usePollenDetails from '../hooks/usePollenDetails';
import useWatchedPollenItems from '../hooks/useWatchedPollenItems';
import { Fab, makeStyles, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles({
  root: {
    height: 'calc(100% - 55px)',
    margin: '5px',
  },
  englishName: {
    textTransform: 'capitalize',
  },
  carousel: {
    display: 'grid',
    width: 360,
    height: 380,
    paddingRight: '10px',

    '& .Carousel-indicators-23': {
      margin: 0,
    },
  },
  img: {
    width: 320,
    height: 300,
    justifyItems: 'center',
  },
  fab: {
    position: 'fixed',
    bottom: 80,
    right: 20,
    color: 'white',
  },
  description: {
    paddingBottom: '70px',
  },
  h3: {
    margin: '5px auto 5px 10px',
  },
});

export default function DictionaryDetailsPage() {
  const classes = useStyles();
  const { id } = useParams();
  const { pollenDetails } = usePollenDetails(id);
  const { updatePollenItemOnWatchlist } = useWatchedPollenItems();

  const handleClick = () => {
    updatePollenItemOnWatchlist(id);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.englishName}>{pollenDetails.englishName}</h1>

      <Tooltip title="Add to allergies list" aria-label="add to allergies list">
        <Fab size="medium" color="primary" className={classes.fab}>
          <AddIcon onClick={handleClick} />
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
        <h3 className={classes.h3}>English name:</h3>
        <p className={classes.englishName}>{pollenDetails.englishName}</p>
        <h3 className={classes.h3}>German name:</h3>
        <p>{pollenDetails.germanName}</p>
        <h3 className={classes.h3}>Latin name:</h3>
        <p>{pollenDetails.latinName}</p>
        <h3 className={classes.h3}>Blooming season: </h3>
        <p>
          {pollenDetails.beginBloomingSeason?.nameOfMonth}-
          {pollenDetails.endBloomingSeason?.nameOfMonth}
        </p>
        <h3 className={classes.h3}>Description: </h3>
        <p className={classes.description}> {pollenDetails.description}</p>
      </section>
    </div>
  );
}
