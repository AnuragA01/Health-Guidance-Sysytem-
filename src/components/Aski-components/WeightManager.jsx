import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Table, Badge } from 'react-bootstrap';

const WeightManager = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [tips, setTips] = useState([]);
  const [diet, setDiet] = useState([]);

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    const roundedBmi = bmiValue.toFixed(2);
    setBmi(roundedBmi);

    let tipList = [];
    let dietPlan = [];
    let cat = '';

    if (bmiValue < 18.5) {
      cat = 'Underweight';
      tipList = [
        'Eat more frequently — 5 to 6 small meals a day.',
        'Choose nutrient-rich, calorie-dense foods like avocados, nuts, and whole grains.',
        'Include strength training in your routine to build muscle mass.',
      ];
      dietPlan = [
        ['Breakfast', 'Peanut butter toast, banana smoothie, boiled egg'],
        ['Lunch', 'Rice with lentils, mixed veggies with paneer, whole grain bread'],
        ['Snacks', 'Granola bars, nuts & seeds, full-fat yogurt'],
        ['Dinner', 'Pasta with cheese, grilled chicken or tofu, salad with dressing'],
      ];
    } else if (bmiValue < 24.9) {
      cat = 'Normal';
      tipList = [
        'Maintain balanced meals with carbs, protein, and healthy fats.',
        'Stay active with 30 mins of moderate exercise daily.',
        'Stay hydrated and get 7-8 hours of sleep.',
      ];
      dietPlan = [
        ['Breakfast', 'Oats with fruit, boiled egg, green tea'],
        ['Lunch', 'Grilled chicken/tofu, brown rice, steamed vegetables'],
        ['Snacks', 'Fruit salad, almonds, black coffee'],
        ['Dinner', 'Quinoa salad, lentil soup, sautéed greens'],
      ];
    } else if (bmiValue < 29.9) {
      cat = 'Overweight';
      tipList = [
        'Reduce sugar and refined carbs.',
        'Opt for whole foods and fiber-rich vegetables.',
        'Increase activity to 45-60 minutes a day.',
      ];
      dietPlan = [
        ['Breakfast', 'Scrambled eggs, multigrain toast, herbal tea'],
        ['Lunch', 'Grilled fish, quinoa, mixed salad with olive oil'],
        ['Snacks', 'Cucumber or carrot sticks, hummus, herbal tea'],
        ['Dinner', 'Vegetable soup, baked tofu, sautéed greens'],
      ];
    } else {
      cat = 'Obese';
      tipList = [
        'Consult a dietitian for a personalized plan.',
        'Avoid processed and fast food completely.',
        'Start with light cardio (like walking), then build up.',
      ];
      dietPlan = [
        ['Breakfast', 'Vegetable smoothie, boiled egg whites, oats'],
        ['Lunch', 'Steamed veggies, small brown rice portion, dal'],
        ['Snacks', 'Low-calorie fruits (apple, papaya), herbal tea'],
        ['Dinner', 'Clear soup, roasted vegetables, small quinoa portion'],
      ];
    }

    setCategory(cat);
    setTips(tipList);
    setDiet(dietPlan);
  };

  return (
    <Container className="py-5 text-light" style={{ backgroundColor: '#121212', borderRadius: '10px' , marginTop: '40px'}}>
      <h2 className="text-center text-warning mb-4">💪 Weight Manager</h2>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
            <Form>
              <Form.Group className="mb-3" controlId="weight">
                <Form.Label>Weight (kg)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="height">
                <Form.Label>Height (cm)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </Form.Group>

              <Button variant="warning" className="w-100" onClick={calculateBMI}>
                Calculate BMI
              </Button>
            </Form>

            {bmi && (
              <Alert variant="dark" className="mt-4 text-center">
                <h5>
                  Your BMI: <span className="text-info">{bmi}</span> —{' '}
                  <Badge bg="secondary">{category}</Badge>
                </h5>
              </Alert>
            )}
          </Card>
        </Col>
      </Row>

      {tips.length > 0 && (
        <Row className="mt-4">
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="p-3 bg-dark text-light shadow-sm">
              <h5 className="text-warning">🧠 Health Tips</h5>
              <ul>
                {tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      )}

      {diet.length > 0 && (
        <Row className="mt-5">
          <Col>
            <Card className="p-4 bg-dark text-light shadow-sm">
              <h5 className="mb-3 text-success">🍽 Suggested Diet Plan</h5>
              <Table striped bordered variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Meal</th>
                    <th>Suggestions</th>
                  </tr>
                </thead>
                <tbody>
                  {diet.map(([meal, items], i) => (
                    <tr key={i}>
                      <td>{meal}</td>
                      <td>{items}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <small className="text-muted">* Always consult a healthcare provider for medical advice.</small>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default WeightManager;
