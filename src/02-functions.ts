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



//adds a colleague to an array, and set their extension number to the highest extension, plus 1
function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    const highestExtensionColleague = highestExtension(cs);
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: highestExtensionColleague.contact.extension + 1
        }
    };
    cs.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

