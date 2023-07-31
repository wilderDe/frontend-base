function toRadians(degrees: number) {
  return degrees * (Math.PI / 180)
}

function rad2degr(rad: number) {
  return (rad * 180) / Math.PI
}

function degr2rad(degr: number) {
  return (degr * Math.PI) / 180
}

const getCentro = (
  latLngInDegr: Array<string[]> | Array<number[]>
): Array<number> => {
  if (latLngInDegr.length === 0) {
    return [-17.405356227442883, -66.15823659326952]
  }

  if (latLngInDegr.length === 1) {
    return [Number(latLngInDegr[0][0]), Number(latLngInDegr[0][1])]
  }
  try {
    if (latLngInDegr.length < 1) throw 'error'
    const LATIDX = 0
    const LNGIDX = 1
    let sumX = 0
    let sumY = 0
    let sumZ = 0

    for (const item of latLngInDegr) {
      const x: number = Number(item[LATIDX])
      const y: number = Number(item[LNGIDX])
      const lat = degr2rad(x)
      const lng = degr2rad(y)
      // sum of cartesian coordinates
      sumX += Math.cos(lat) * Math.cos(lng)
      sumY += Math.cos(lat) * Math.sin(lng)
      sumZ += Math.sin(lat)
    }

    const avgX = sumX / latLngInDegr.length
    const avgY = sumY / latLngInDegr.length
    const avgZ = sumZ / latLngInDegr.length

    // convert average x, y, z coordinate to latitude and longtitude
    const lng = Math.atan2(avgY, avgX)
    const hyp = Math.sqrt(avgX * avgX + avgY * avgY)
    const lat = Math.atan2(avgZ, hyp)
    return [rad2degr(lat), rad2degr(lng)]
  } catch (e) {
    return [-17.405356227442883, -66.15823659326952]
  }
}

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const earthRadius = 6371 // Radio promedio de la Tierra en kilómetros

  // Convertir las latitudes y longitudes de grados a radianes
  const lat1Rad = toRadians(lat1)
  const lon1Rad = toRadians(lon1)
  const lat2Rad = toRadians(lat2)
  const lon2Rad = toRadians(lon2)

  // Calcular las diferencias de latitud y longitud
  const latDiff = lat2Rad - lat1Rad
  const lonDiff = lon2Rad - lon1Rad

  // Aplicar la fórmula del haversine
  const a =
    Math.sin(latDiff / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(lonDiff / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return earthRadius * c
}

const calcularZoom = (puntos: Array<string[]> | Array<number[]>): number => {
  let zoom = 14
  if (puntos.length === 0) {
    return 6
  }

  if (puntos.length === 1) {
    return 10
  }
  let maxDistance = 0
  for (let i = 0; i < puntos.length - 1; i++) {
    for (let j = i + 1; j < puntos.length; j++) {
      const distance = calculateDistance(
        Number(puntos[i][0]),
        Number(puntos[i][1]),
        Number(puntos[j][0]),
        Number(puntos[j][1])
      )
      if (distance > maxDistance) {
        maxDistance = distance
      }
    }
  }

  switch (maxDistance > 0) {
    case maxDistance > 1000:
      zoom = 5
      break
    case maxDistance > 700:
      zoom = 6
      break
    case maxDistance > 500:
      zoom = 7
      break
    case maxDistance > 300:
      zoom = 8
      break
    case maxDistance > 100:
      zoom = 9
      break
    case maxDistance > 70:
      zoom = 10
      break
    case maxDistance > 50:
      zoom = 11
      break
    default:
      zoom = 12
      break
  }

  return zoom
}

export { getCentro, calcularZoom }
