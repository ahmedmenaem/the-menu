import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const LoaderComponent = () => (
  <Segment style={{ height: '100vh' }}>
    <Dimmer active inverted>
      <Loader inverted />
    </Dimmer>
  </Segment>
);

export default LoaderComponent;
