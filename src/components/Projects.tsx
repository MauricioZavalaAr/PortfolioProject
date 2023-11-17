import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import tictactoeImage from '../images/tictactoeImage.png';
import hangmanImage from '../images/hangmanImage.png';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import githublogo from '../images/githublogo.png';
import clockImage from '../images/rickmorty.png';
import typeScryptLogo from '../images/typescriptlogo.png';
import reactLogo from '../images/reactlogo.png';
import unityLogo from '../images/unitylogo.png';
import flashCardImage from '../images/flashcardImage.png';
import gameImage from '../images/gamePicture.png';



const tictactoeURL = 'https://salmon-island-075a2941e.4.azurestaticapps.net/';
const tictactoeGIT = 'https://github.com/MauricioZavalaAr/TicTacToeTsx';

const gamewebURL = 'https://icy-moss-0ce7b8f1e.4.azurestaticapps.net/';
const gamewebGIT = 'https://github.com/MauricioZavalaAr/NewReactGame';



const hangmanURL = 'https://gentle-river-0f198451e.4.azurestaticapps.net';
const hangmanGIT = 'https://github.com/MauricioZavalaAr/HangmanMZ';

const flashcardsURL = 'https://black-moss-07e63501e.4.azurestaticapps.net/'
const flashcardsGIT = 'https://github.com/MauricioZavalaAr/Flash_Card'

const clockUnity = 'https://play.unity.com/p/clockproject-1/edit';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      
    <Card>
  <Card.Body>
    <Row >
      <Col md={4}>
        <Card.Img src={gameImage} alt="Card image" style={{ width: 350, height: 'auto' }} />
      </Col>
      <Col md={8} className="d-flex flex-column justify-content-center">
        <Col>
        <Card.Title>Game WebSite</Card.Title>
        <img src={typeScryptLogo} alt="typeScrypt" className="social-icon" width={'30px'} height={'30px'}/>
        <img src={reactLogo} alt="react" className="social-icon" width={'30px'} height={'30px'}/>
        </Col>
        <Card.Text>
        Tic Tac Toe Game in React with TypeScript. Play against an AI, in an upgraded board to a 4 x 4 line Tic Tac Toe for more strategy.
        </Card.Text>
        <Col>
        <Button variant="primary" href={gamewebURL} target="_blank" rel="noopener noreferrer">View project</Button>
        <Button className="margin-left" variant="primary" href={gamewebGIT} target="_blank" rel="noopener noreferrer"> <img src={githublogo} alt="GitHub" className="social-icon" width={'15px'} height={'15px'}/> Open Github</Button>  

        </Col>
      </Col>
    </Row>
  </Card.Body>
</Card>

    <Card>
  <Card.Body>
    <Row >
      <Col md={4}>
        <Card.Img src={tictactoeImage} alt="Card image" style={{ width: 120, height: 'auto' }} />
      </Col>
      <Col md={8} className="d-flex flex-column justify-content-center">
        <Col>
        <Card.Title>Tic Tac Toe</Card.Title>
        <img src={typeScryptLogo} alt="typeScrypt" className="social-icon" width={'30px'} height={'30px'}/>
        <img src={reactLogo} alt="react" className="social-icon" width={'30px'} height={'30px'}/>
        </Col>
        <Card.Text>
        Tic Tac Toe Game in React with TypeScript. Play against an AI, in an upgraded board to a 4 x 4 line Tic Tac Toe for more strategy.
        </Card.Text>
        <Col>
        <Button variant="primary" href={tictactoeURL} target="_blank" rel="noopener noreferrer">View project</Button>
        <Button className="margin-left" variant="primary" href={tictactoeGIT} target="_blank" rel="noopener noreferrer"> <img src={githublogo} alt="GitHub" className="social-icon" width={'15px'} height={'15px'}/> Open Github</Button>  

        </Col>
      </Col>
    </Row>
  </Card.Body>
</Card>
    <Card>
  <Card.Body>
    <Row >
      <Col md={4}>
        <Card.Img src={hangmanImage} alt="Card image" style={{ width: 300, height: 'auto' }} />
      </Col>
      <Col md={8} className="d-flex flex-column justify-content-center">
        <Col>
        <Card.Title>Hangman</Card.Title>
        <img src={typeScryptLogo} alt="typeScrypt" className="social-icon" width={'30px'} height={'30px'}/>
        <img src={reactLogo} alt="react" className="social-icon" width={'30px'} height={'30px'}/>
        </Col>
        <Card.Text>
        Hangman Game in React and React with TypeScript, featuring interactive gameplay.
         Players guess the word, with correct letters appearing in one color and incorrect letters in another. 
         Winning displays a victory message with a replay option, while running out of guesses prompts a retry. 
         The game sources random words from the Words API (https://www.wordsapi.com/), 
         and a unique special feature adds an extra layer of fun and challenge.
        </Card.Text>
        <Col>
        <Button variant="primary" href={hangmanURL} target="_blank" rel="noopener noreferrer">View project</Button>
        <Button className="margin-left" variant="primary" href={hangmanGIT} target="_blank" rel="noopener noreferrer"> <img src={githublogo} alt="GitHub" className="social-icon" width={'15px'} height={'15px'}/> Open Github</Button>  
        </Col>
      </Col>
    </Row>
  </Card.Body>
</Card>
    <Card>
  <Card.Body>
    <Row >
      <Col md={4}>
        <Card.Img src={flashCardImage} alt="Card image" style={{ width: 150, height: 'auto' }} />
      </Col>
      <Col md={8} className="d-flex flex-column justify-content-center">
        <Col>
        <Card.Title>Flash Card</Card.Title>
        <img src={typeScryptLogo} alt="typeScrypt" className="social-icon" width={'30px'} height={'30px'}/>
        <img src={reactLogo} alt="react" className="social-icon" width={'30px'} height={'30px'}/>
        </Col>
        <Card.Text>
        Digital Flash Card app is a user-friendly and engaging platform that uses an Open Trivia Database API, offers a customizable Flash Card experience with 
        options for selecting categories and setting question counts. 
        With dynamic flash cards presenting questions and answers, it provides an entertaining and educational experience.
        
        </Card.Text>
        <Col>
        <Button className="mr-1" variant="primary" href={flashcardsURL} target="_blank" rel="noopener noreferrer"  >View project</Button>  
        <Button className="margin-left" variant="primary" href={flashcardsGIT} target="_blank" rel="noopener noreferrer"> <img src={githublogo} alt="GitHub" className="social-icon" width={'15px'} height={'15px'}/> Open Github</Button>  

        
        </Col>
      </Col>
    </Row>
  </Card.Body>
</Card>

    <Card>
  <Card.Body>
    <Row >
      <Col md={4}>
        <Card.Img src={clockImage} alt="Card image" style={{ width: 350, height: 'auto' }} />
      </Col>
      <Col md={8} className="d-flex flex-column justify-content-center">
        <Col>
        <Card.Title>Clock Project</Card.Title>
        <img src={unityLogo} alt="typeScrypt" className="social-icon" width={'30px'} height={'30px'}/>
        </Col>
        <Card.Text>
        Digital Clock project with time, date, day, and seconds display. Designed for both military and 12-hour formats, and offers Night and Day modes for a visually appealing and functional timekeeping experience.
        
        </Card.Text>
        <Col>
        <Button className="mr-1" variant="primary" href={clockUnity} target="_blank" rel="noopener noreferrer"  >View project</Button>  
                
        </Col>
      </Col>
    </Row>
  </Card.Body>
</Card>
    
    </div>
  );
}

export default Projects;