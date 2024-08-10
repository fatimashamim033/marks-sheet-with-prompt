

document.write(
    '<center><table border=3px>'
    )
        
var eng=+prompt('enter english marks')
var urd=+prompt('enter english marks')
var math=+prompt('enter english marks')
var sci=+prompt('enter english marks')
var comp=+prompt('enter english marks')

document.write(
    '<tr>,<th><center>Subject</th><th><center>Total Marks</th><th><center>Obtain Marks</th></tr>'
)
document.write(
    '<tr><td>English</td><td>100</td><td>', eng, '</td></tr>')
document.write(
    '<tr><td>Urdu</td><td>100</td><td>', urd, '</td></tr>')
document.write(
        '<tr><td>Math</td><td>100</td><td>', math, '</td></tr>')
document.write(
            '<tr><td>Science</td><td>100</td><td>', sci, '</td></tr>')
document.write(
            '<tr><td>Computer</td><td>100</td><td>', comp, '</td></tr>')


let total= eng + urd + math + sci + comp
document.write(
    '<tr><td>Total</td><td>500</td><td>', total, '</td></tr>')



let per= total /500 *100

    document.write('<tr><td>Percentage</td><td colspan="2">', per, '% </td></tr>')
if(per>=80)
{grade="A+1"}

else if(per>=70)
{grade="A"}

else if(per>=60)
{grade="B"}

else if(per>=50)
{grade="C"}

else if(per>=40)
{grade="D"}

// else(per>=40)
// {grade ="F"}
document.write('<tr><td>Grade</td><td colspan="2">', grade, '</td></tr>')
