function Arrow({ startX, startY, endX, endY }: any) {
  // Calculate the angle and length of the arrow
  const angle = (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI;
  const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

  return (
    <div
      className="arrow"
      style={{
        left: startX,
        top: startY,
        width: length,
        transform: `rotate(${angle}deg)`,
      }}
    />
  );
}

export default Arrow;
