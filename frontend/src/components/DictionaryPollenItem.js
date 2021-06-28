import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function DictionaryPollenItem({ pollenItem }) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push(`/dictionary/${pollenItem.id}/details`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pollenItem.firstPicUrl}
          onClick={handleClick}
        />
        <CardContent>
          <Typography>{pollenItem.englishName}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
