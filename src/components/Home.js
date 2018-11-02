import React from 'react';
import Masthead from './Masthead';
import ThreeCol from './ThreeCol';
import GoldenRight from './GoldenRight';
import Typography from '@material-ui/core/Typography/Typography';
import { withStyles } from '@material-ui/core';
import Rule from './Rule';
import Content from './Content';
import Codes from './Codes';

const simpleExample = `
const testing = () => {
  console.log('hi!');
};
`;

const Home = ({ classes }) => (
  <div>
    <Masthead/>
    <Content>
      <ThreeCol className={classes.section}>
        <div>
          <Typography variant={'h5'} gutterBottom>Deliver faster</Typography>
          <Typography>
            Spend more time on customer facing interactions instead of the API that nobody will see anyway.
          </Typography>
        </div>
        <div>
          <Typography variant={'h5'} gutterBottom>Deploy anywhere</Typography>
          <Typography>
            No vendor lock-in because it's just Node.js + Express.
          </Typography>
        </div>
        <div>
          <Typography variant={'h5'} gutterBottom>RESTful</Typography>
          <Typography>
            Uses established practices to make consumption a delight for all your customers.
          </Typography>
        </div>
      </ThreeCol>
      <Rule/>
      <GoldenRight className={classes.section}>
        <div>
          <Typography variant={'h5'} gutterBottom>The basics</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id suscipit tellus. Maecenas placerat consequat commodo. Morbi luctus libero nunc, nec tincidunt nibh viverra
            nec.</Typography>
        </div>
        <div>
          <Codes>{simpleExample.trim()}</Codes>
        </div>
      </GoldenRight>
      <GoldenRight className={classes.section}>
        <div>
          <Typography variant={'h5'} gutterBottom>Add users</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id suscipit tellus. Maecenas placerat consequat commodo. Morbi luctus libero nunc, nec tincidunt nibh viverra
            nec.</Typography>
        </div>
        <div>
          <Codes>{simpleExample.trim()}</Codes>
        </div>
      </GoldenRight>
    </Content>
  </div>
);

const styles = theme => ({
  section: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  sectionTitle: {
    marginBottom: theme.spacing.unit * 4,
  }
});

export default withStyles(styles)(Home);
