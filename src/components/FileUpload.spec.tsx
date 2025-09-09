import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import FileUpload from './FileUpload'

vi.mock('../utils/resizeImage', () => ({
  resizeImage: vi.fn(async (file: File) => file) // mock returns the same file
}))

describe('FileUpload', () => {
  beforeAll(() => {
    vi.stubGlobal('URL', {
      createObjectURL: vi.fn(() => 'mocked-url'),
      revokeObjectURL: vi.fn()
    })
  })

  it('renders file input', () => {
    render(<FileUpload onUpload={() => {}} />)
    expect(screen.getByLabelText(/upload/i)).toBeInTheDocument()
  })

  it('calls onUpload when a file is selected', async () => {
    const onUpload = vi.fn()
    render(<FileUpload onUpload={onUpload} />)

    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    const input = screen.getByTestId('upload-file')

    await userEvent.upload(input, file)

    expect(onUpload).toHaveBeenCalledWith('mocked-url')
    expect(screen.getByAltText('hello.png')).toBeInTheDocument()
  })
})
