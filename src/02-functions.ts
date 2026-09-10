import {Friend, Colleague } from './myTypes'
import { colleagues, friends } from './01-basics';

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))




// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));


//Add a new colleague to the current colleagues list.

function addColleague(
    cs: Colleague[],
    name: string,
    department: string,
    email: string,
) : Colleague[] {
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: Math.floor(Math.random() * 1000) // Random extension for example
        }
    };
    cs.push(newColleague);
    return cs;
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
