export async function resizeImage(file: File, maxSize = 1920): Promise<File> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const reader = new FileReader()

    reader.onload = (e) => {
      if (!e.target?.result) return reject('Failed to load image')

      img.src = e.target.result as string
    }

    img.onload = () => {
      const { width, height } = img

      const scale = Math.min(maxSize / width, maxSize / height, 1)
      const newWidth = Math.round(width * scale)
      const newHeight = Math.round(height * scale)

      const canvas = document.createElement('canvas')
      canvas.width = newWidth
      canvas.height = newHeight
      const ctx = canvas.getContext('2d')
      if (!ctx) return reject('Canvas context error')

      ctx.drawImage(img, 0, 0, newWidth, newHeight)

      canvas.toBlob(
        (blob) => {
          if (!blob) return reject('Failed to convert canvas to blob')

          const resizedFile = new File([blob], file.name, {
            type: file.type,
            lastModified: Date.now()
          })

          resolve(resizedFile)
        },
        file.type,
        0.9
      )
    }

    img.onerror = (err) => reject(err)

    reader.readAsDataURL(file)
  })
}
