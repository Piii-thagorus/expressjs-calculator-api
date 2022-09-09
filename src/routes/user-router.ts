import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import { ParamMissingError } from '@shared/errors';

// Misc
const router = Router();
const { OK } = StatusCodes;


// Paths
export enum operators {

    add = "/add/:first/:second/",
    subtract = "/subtract/:first/:second/",
    multiply = "/multiply/:first/:second",
    divide = "/divide/:first/:second"
}

function answerMessage(answer: number) {

    return (
        `<div class="column-header">Answer:</div>
      <div id="all-users-anchor">
            <h3> The answer is : ${answer}</h3>
      </div>`
    );
}


function invalidOperandsMessage() {

    return `<div class="column-header">Error:</div>
      <div id="all-users-anchor">
            <h3> Please input the right operands</h3>
      </div>`
}

function invalidOperatorMessage() {

    return `<div class="column-header">Error:</div>
      <div id="all-users-anchor">
            <h3> Please input the right operator</h3>
      </div>`
}


// **** Routes **** //

//No operand route
router.get(':operator/:number1(\D+)/:number2(\D+)/', async (_: Request, res: Response) => {

    return res.send(invalidOperandsMessage()).end();
});

//No operator specified
router.get('/:first/:second/', async (_: Request, res: Response) => {
    return res.send(invalidOperatorMessage()).end();
});


/**
 * Addition route
 */
router.get(operators.add, async (req: Request, res: Response) => {

  if (!req.params) {
    throw new ParamMissingError();
  }
  const first_operand =  parseInt(req.params.first);
  const second_operand = parseInt(req.params.second);
  console.log(first_operand)
  const answer = first_operand + second_operand

  res.set({ 'Content-Type': 'text/plain; charset=utf-8' });
  res.send(answerMessage(answer));
  res.status(OK);

});


router.get(operators.subtract, async (req: Request, res: Response) => {

    if (!req.params) {
        throw new ParamMissingError();
    }
    const first_operand =  parseInt(req.params.first);
    const second_operand = parseInt(req.params.second);

    const answer = first_operand - second_operand

    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });
    res.send(answerMessage(answer));
    res.status(OK);

});


router.get(operators.multiply, async (req: Request, res: Response) => {

    if (!req.params) {
        throw new ParamMissingError();
    }
    const first_operand =  parseInt(req.params.first);
    const second_operand = parseInt(req.params.second);

    const answer = first_operand * second_operand

    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });
    res.send(answerMessage(answer));
    res.status(OK);
});


router.get(operators.divide, async (req: Request, res: Response) => {

    if (!req.params) {
        throw new ParamMissingError();
    }
    const first_operand =  parseInt(req.params.first);
    const second_operand = parseInt(req.params.second);

    const answer = first_operand / second_operand

    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });
    res.send(answerMessage(answer));
    res.status(OK);

});

// **** Export default **** //

export default router;
