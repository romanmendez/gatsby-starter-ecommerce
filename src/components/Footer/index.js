import React from 'react'
import Link from 'gatsby-link'
import {
  Segment,
  Container,
  Grid,
  List,
  Header,
  Menu,
  Icon,
} from 'semantic-ui-react'

const Footer = () => (
  <div>
    <Segment
      vertical
      style={{
        padding: '5em 0em',
        marginTop: '3em',
        borderTop: '1px solid #f2f2f2',
      }}
    >
      <Container text>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h4" content="About" />
              <List link>
                <List.Item as={Link} to="/privacy">
                  Privacy
                </List.Item>
                <List.Item as={Link} to="/terms">
                  Terms
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as="h4" content="Services" />
              <List link>
                <List.Item as={Link} to="/">
                  Our Products
                </List.Item>
                <List.Item as={Link} to="/gatsbyimage">
                  Gatsby Image Example
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4">Footer Header</Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
              <Menu compact borderless secondary>
                <Menu.Item link>
                  <Icon link name="twitter" />
                  Twitter
                </Menu.Item>

                <Menu.Item link>
                  <Icon link name="facebook" />
                  Share
                </Menu.Item>

                <Menu.Item link>
                  <Icon name="mail" />
                  Email
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)

export default Footer