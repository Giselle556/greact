import React from "react";
import {Row, Col, Card, Icon, CardTitle} from 'react-materialize'


function Portfolio(){
return(
<Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="https://fitness-tracker556.herokuapp.com/?id=6187764d52a14700161bee22">Deployed Application</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="data:image/jpeg;base64,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">Workout Dashboard</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
  Fitness Tracker that allows you to track your exercise type,duration,sets, and weight bades on if you choose resistance or cardio training. On the dashboard you willbe presented with graphs that will track your time and weights.
    </Card>
  </Col>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="https://mbelfrom.github.io/group-project-mag/">Deployed Application</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://user-images.githubusercontent.com/87721575/132913782-9d9b3185-3846-444c-8ef1-0ed828521688.png"
      height='80'>Feeling Hungry</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
  Have you ever been stuck not knowing what to eat for dinner? Our web app will generate a recipe for you. Just choose from chicken, beef, or vegan options and a recipe will generate. Too tired to cook? Our web app will also suggest the nearest restaurant to you. You also have the option to add and remove your favorite recipes.
    </Card>
  </Col>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="https://appchat4us.herokuapp.com">Deployed Application</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="data:image/png;base64,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">2 Chit 2 chat</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
     Basic chat application with register, login/logout, and creation of multiple chat rooms feature.
    </Card>
  </Col>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="https://get-outta-town-5345.herokuapp.com">Deployed Application</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="data:image/jpeg;base64,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">Get Outta Town</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
  Get Outta Town is an application that will help users create and plan future trips. Users will be required to sign in to add/delete trips and will have the option to search for previously created trips for inspiration.
    </Card>
  </Col>
</Row>

)
}

export default Portfolio;