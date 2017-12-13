
function add(a, b){
  return String(a + b)
}

function subtract(a, b){
  return String(a - b)
}

function multiply(a, b)
{
  return String(a * b)
}

function divide(a, b)
{
  return String(a / b)
}

function inc(n)
{
  return String(n += 1)
}

function dec(n)
{
  return String(n -= 1)
}


describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

function makeInt(n)
{
  return String.parseInt(n)
}
