import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
    it('should render the heading', () => {
        //render the component
        const { container } =render(<Main />)

        //search the elemet and verify if exists
        expect(screen.getByRole('heading', 
            { name: /react avançado/i})).toBeInTheDocument()

        //generate snapshot
        expect(container.firstChild).toMatchSnapshot()
    })
})