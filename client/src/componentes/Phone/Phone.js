import React from 'react';

import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Col } from 'react-flexbox-grid';

const Phone = (props) => {

  const { small_image, name, price, id } = props.info;
  return (
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                image={small_image}
                title={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography component="p">
                  {price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link to={`/phones/${id}`}>Más Información</Link>
              </Button>
            </CardActions>
          </Card>
        </Col>

  )

}
export default Phone;