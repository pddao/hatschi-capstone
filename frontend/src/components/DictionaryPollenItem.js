import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  img: {
    height: 160,
  },
});

export default function DictionaryPollenItem({ pollenItem }) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/dictionary/${pollenItem.id}/details`);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          image={pollenItem.firstPicUrl}
          onClick={handleClick}
        />
        <CardContent>
          <Typography color="primary">{pollenItem.englishName}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
