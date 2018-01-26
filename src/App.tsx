import * as React from 'react';
import Button from 'material-ui/Button';

const App: React.SFC<{}> = () =>
  (
    <Button onClick={() => alert('World')} raised={true} color="primary">
      Hello!
    </Button>
  );

export default App;