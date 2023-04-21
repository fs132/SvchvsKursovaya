import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import metro from './metro.jpg';
import thief from './thief.jpg';
import gears from './gears.jpg';
import cod from './cod.jpg';
import mafia from './mafia.jpg';
import space from './dead space.jpg';

export class NewsForm extends Component {
    static displayName = NewsForm.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <fieldset>
            <Row>
                <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={metro} />
                <Card.Body>
                    <Card.Title>Metro Last Light</Card.Title>
                    <Card.Text>
                       Вторая часть игры про Артёма, спасителя метро.
                    </Card.Text>
                </Card.Body>
                    </Card>
                </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={thief} />
                            <Card.Body>
                                <Card.Title>Thief</Card.Title>
                                <Card.Text>
                                    Новая игра от разработчиков старых версий игры Thief.Вор Гаррет является главным героем и ему нужно будет решить загадку камня Примали и спасти город
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={gears} />
                            <Card.Body>
                                <Card.Title>Gears of War 2</Card.Title>
                                <Card.Text>
                                    2 часть всем понравившейся игры-шутера.Сержант Феникс и Отряд Дельта продолжают вести войну с Саранчой.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
            <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ cod} />
                            <Card.Body>
                                <Card.Title>Call Of Duty:Advanced Warfare</Card.Title>
                                <Card.Text>
                                    Новая игра от компании Activision.Модернизированный мир - новые правила войны, и главный герой Митчелл как обычно старается спасти мир
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ space} />
                            <Card.Body>
                                <Card.Title>Dead Space</Card.Title>
                                <Card.Text>
                                    Игра в жанре хоррор.Космический корабль USG Ишимура попал в бедствие и главный герой, Айзек Кларк, летит на починку.Но спасательная операция оказалось намного более опасной.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ mafia} />
                            <Card.Body>
                                <Card.Title>Mafia 2</Card.Title>
                                <Card.Text>
                                    Продолжение нашумевшей истории о Томми Анджело и городе Лост-Хэвен?Нет, новая история, новый город и новая мафия.Вито Скалетта - ключ к истории города Эмпайр-Бэй.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </fieldset>
        );
    }
}
