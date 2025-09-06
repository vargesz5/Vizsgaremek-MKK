import React, {useEffect} from 'react'

interface FetchProps {
 datas: { name: string; email: string; password: string };
 resetTrigger: () => void;
}


const FetchData: React.FC<FetchProps> = ({ datas, resetTrigger }) => {
    useEffect(() => {
        
    const { name, email, password } = datas;

    if (!name) { console.log("Név hiányzik"); resetTrigger(); return; }
    if (!email) { console.log("Email hiányzik"); resetTrigger(); return; }
    if (!password || password.length < 6) { console.log("Jelszó túl rövid"); resetTrigger(); return; }
    if (!email.includes("@") || !email.includes(".")) { console.log("Hibás email formátum"); resetTrigger(); return; }

    console.log("✅ Minden rendben:");
    //fetch-->

    resetTrigger();
  }, [datas]);


  return null;
}

export default FetchData