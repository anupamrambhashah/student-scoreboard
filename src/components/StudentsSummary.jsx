function StudentsSummary({ students }) {
  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const avg = total === 0 ? 0 :
    Math.round(students.reduce((sum, s) => sum + s.score, 0) / total);

  return (
    <div className="summary">
      <div><h3>TOTAL</h3><h1>{total}</h1></div>
      <div><h3>PASSED</h3><h1>{passed}</h1></div>
      <div><h3>AVG</h3><h1>{avg}</h1></div>
    </div>
  );
}

export default StudentsSummary;