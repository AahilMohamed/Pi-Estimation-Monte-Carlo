# π estimation using Monte Carlo simulations

## Overview
This project uses Monte Carlo simulations to produce a rough estimate on the value of π
A Monte Carlo simulation is essentially an algorithm that relies on repeated random samplings to arrive at meaningful numerical results.


## Process
In a canvas, a square of lenght 2R is drawn. Inscribed into the square is a circle of radius R, such that the circle rests nicely in the square.
Thus, the area of circle can be calculated by multiplying the area of the square by a certain constant, P. In other words:

πR<sup>2</sup> = P * 4R<sup>2</sup>,

which can be simplified to:

π = 4P,

where P is the ratio of the area of a circle over the area of a square.

Since we cannot use the actual area of the circle to find P, as π is unknown, we need to use Monte Carlo simulations.

By simulation random points in the square, as the number of points tend to infinity, the ratio of of the number of points in the circle, to the total number of points in the square, will tend to the true value of P. 

Hence, we have estimated the value of π


## Build Status
Currently, there are 2 bugs. 

The spawning of dots doesn't stop once it exceeds the input value. 

The formula to calculate percentage efficiency does not work

These issues will be resolved soon.
