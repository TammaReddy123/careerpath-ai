// Gender detection utility based on name and email patterns

export const detectGenderFromName = (name) => {
  if (!name) return null;
  
  const nameLower = name.toLowerCase().trim();
  const firstName = nameLower.split(' ')[0];
  
  // Common male name patterns
  const malePatterns = [
    'john', 'james', 'robert', 'michael', 'william', 'david', 'richard', 'joseph',
    'thomas', 'charles', 'daniel', 'matthew', 'mark', 'donald', 'anthony', 'paul',
    'steven', 'andrew', 'kenneth', 'joshua', 'kevin', 'brian', 'george', 'timothy',
    'jiten', 'raj', 'kumar', 'suresh', 'ramesh', 'vijay', 'amit', 'rahul', 'arjun',
    'mohammed', 'ahmed', 'ali', 'hassan', 'omar', 'yusuf', 'ibrahim'
  ];
  
  // Common female name patterns
  const femalePatterns = [
    'mary', 'patricia', 'jennifer', 'linda', 'elizabeth', 'barbara', 'susan', 'jessica',
    'sarah', 'karen', 'nancy', 'lisa', 'betty', 'margaret', 'sandra', 'ashley',
    'kimberly', 'emily', 'donna', 'michelle', 'carol', 'amanda', 'dorothy', 'melissa',
    'priya', 'kavita', 'sneha', 'anjali', 'divya', 'neha', 'pooja', 'radha', 'sita',
    'fatima', 'aisha', 'zainab', 'mariam', 'khadija', 'amina', 'layla', 'sara'
  ];
  
  if (malePatterns.includes(firstName)) {
    return 'male';
  }
  if (femalePatterns.includes(firstName)) {
    return 'female';
  }
  
  return null;
};

export const detectGenderFromEmail = (email) => {
  if (!email) return null;
  
  const emailLower = email.toLowerCase();
  const localPart = emailLower.split('@')[0];
  
  // Extract potential name from email (before numbers/special chars)
  const nameMatch = localPart.match(/^([a-z]+)/);
  if (nameMatch) {
    return detectGenderFromName(nameMatch[1]);
  }
  
  return null;
};

export const getGenderColor = (gender) => {
  if (gender === 'male') {
    return {
      gradient: 'from-blue-500 to-blue-600',
      border: 'border-blue-400',
      bg: 'bg-blue-500',
      text: 'text-blue-600',
      light: 'bg-blue-50',
      dark: 'bg-blue-900/30'
    };
  } else if (gender === 'female') {
    return {
      gradient: 'from-pink-500 to-pink-600',
      border: 'border-pink-400',
      bg: 'bg-pink-500',
      text: 'text-pink-600',
      light: 'bg-pink-50',
      dark: 'bg-pink-900/30'
    };
  }
  return {
    gradient: 'from-purple-500 to-purple-600',
    border: 'border-purple-400',
    bg: 'bg-purple-500',
    text: 'text-purple-600',
    light: 'bg-purple-50',
    dark: 'bg-purple-900/30'
  };
};

export const getAvatarUrl = (gender, seed = null) => {
  const seedValue = seed || (gender === 'male' ? 'male' : gender === 'female' ? 'female' : 'default');
  const bgColor = gender === 'male' ? 'b6e3ff' : gender === 'female' ? 'ffd5dc' : 'c7d2fe';
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seedValue}&backgroundColor=${bgColor}`;
};
