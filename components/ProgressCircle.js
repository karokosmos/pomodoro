import React from 'react'
import Svg, { Circle, Defs, LinearGradient, Text, Stop } from 'react-native-svg'

export default function ProgressCircle({ size, strokeWidth, percentage, label }) {
  const viewBox = `0 0 ${size} ${size}`
  const radius = (size - strokeWidth) / 2
  const circumference = radius * Math.PI * 2
  const dash = (percentage * circumference) / 100

  return (
    <Svg width={size} height={size} viewBox={viewBox}>

      <Defs>
        <LinearGradient id="grad">
          <Stop offset="0" stopColor="#FBAB7E" stopOpacity="1" />
          <Stop offset="1" stopColor="#FEDA82" stopOpacity="1" />
        </LinearGradient>
      </Defs>

      <Circle
        fill="none"
        stroke="#f6f6f6"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />

      {percentage !== 0 &&
        <Circle
          fill="none"
          stroke="url(#grad)"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={[dash, circumference - dash]}
          strokeLinecap="round"
        />
      }

      <Text
        fill="#2D2D2D"
        fontSize={45}
        x="50%"
        y="50%"
        dy="15"
        textAnchor="middle"
        fontWeight="bold"
      >
        {label}
      </Text>

    </Svg>
  )
}