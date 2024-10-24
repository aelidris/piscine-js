export const getArchitects = () => {
    const allPeople = document.querySelectorAll('a, span');
    const architects = Array.from(allPeople).filter((person) => person.tagName === 'A');
    const nonArchitects = Array.from(allPeople).filter((person) => person.tagName !== 'A');
    return [architects, nonArchitects];
  };

export const getClassical = () => {
    const [architects] = getArchitects();
    const classical = architects.filter((person) => person.classList.contains('classical'));
    const nonClassical = architects.filter((person) => !person.classList.contains('classical'));
    return [classical, nonClassical];
  };

export  const getActive = () => {
    const [classical] = getClassical();
    const active = classical.filter((person) => person.classList.contains('active'));
    const nonActive = classical.filter((person) => !person.classList.contains('active'));
    return [active, nonActive];
  };

export  const getBonannoPisano = () => {
    const [activeClassical] = getActive();
    const bonanno = document.getElementById('BonannoPisano');
    const remaining = activeClassical.filter((person) => person.id !== 'BonannoPisano');
    return [bonanno, remaining];
  };