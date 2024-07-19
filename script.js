const bloodGroupCompatibility = {
    'A+': { donate: ['A+', 'AB+'], receive: ['A+', 'A-', 'O+', 'O-'] },
    'A-': { donate: ['A+', 'A-', 'AB+', 'AB-'], receive: ['A-', 'O-'] },
    'B+': { donate: ['B+', 'AB+'], receive: ['B+', 'B-', 'O+', 'O-'] },
    'B-': { donate: ['B+', 'B-', 'AB+', 'AB-'], receive: ['B-', 'O-'] },
    'AB+': { donate: ['AB+'], receive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
    'AB-': { donate: ['AB+', 'AB-'], receive: ['A-', 'B-', 'AB-', 'O-'] },
    'O+': { donate: ['A+', 'B+', 'AB+', 'O+'], receive: ['O+', 'O-'] },
    'O-': { donate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], receive: ['O-'] },
  };

  function showCompatibility(bloodGroup) {
    const compatibility = bloodGroupCompatibility[bloodGroup];
    document.getElementById('selected-group').textContent = `Blood Group: ${bloodGroup}`;
    document.getElementById('donate').textContent = `Can donate to: ${compatibility.donate.join(', ')}`;
    document.getElementById('receive').textContent = `Can receive from: ${compatibility.receive.join(', ')}`;
  }