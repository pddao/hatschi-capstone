import { useHistory } from 'react-router-dom';
import { CardActions, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    '& .MuiCardMedia-root': {
      margin: 0,
      height: 175,
      width: 170,
    },
  },
  englishName: {
    textTransform: 'capitalize',
  },
  cardContent: {
    padding: '5px 0 0 10px',
  },
  cardActions: {
    padding: '0 0 5px 10px',
  },
});

export default function DictionaryPollenItem({ pollenItem }) {
  const classes = useStyles();
  const history = useHistory();

  const pushToDetailspage = () => {
    history.push(`/dictionary/${pollenItem.englishName}/details`);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          image={pollenItem.firstPicUrl}
          onClick={pushToDetailspage}
        />
        <CardContent
          className={classes.cardContent}
          onClick={pushToDetailspage}
        >
          <Typography className={classes.englishName}>
            {pollenItem.englishName}
          </Typography>
        </CardContent>
        <CardActions
          className={classes.cardActions}
          onClick={pushToDetailspage}
        >
          <Typography color="primary">Learn more</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
