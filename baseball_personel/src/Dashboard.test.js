import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from 'react-testing-library'
import Dashboard from './Dashboard'
import 'jest-dom/extend-expect'

describe( '<Dashboard />', () => {
   
   
    it('renders successfully', () => {
        render(<Dashboard />)
    })


    it('renders # of strikes', () => {
        const {getByText} = render(<Dashboard />)

        const strikeButton = getByText('Strike')
        fireEvent.click(strikeButton)
    })


    it('renders # of balls', () => {
        const {getByText} = render(<Dashboard />)

        const BallButton = getByText('Ball')
        fireEvent.click(BallButton)
    })


    it('renders # of fouls', () => {
        const {getByText} = render(<Dashboard />)

        const FoulButton = getByText('Foul')
        fireEvent.click(FoulButton)
    })


    it('renders if there is a hit', () => {
        const {getByText} = render(<Dashboard />)

        const HitButton = getByText('Hit')
        fireEvent.click(HitButton)
    })






} )