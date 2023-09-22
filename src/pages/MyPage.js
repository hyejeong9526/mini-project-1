import React, { useState, useEffect } from 'react';

export default function Mypage() {
    const [member, setMember] = useState(null);
    const [setIsEditMode] = useState(false);
    const [updatedPassword, setUpdatedPassword] = useState('');
    const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState('');
    const [updatedEmail, setUpdatedEmail] = useState('');

    useEffect(() => {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        const email = localStorage.getItem('email');
        const phonenumber = localStorage.getItem('phonenumber');

        setMember({ username, password, email, phonenumber });
    }, []);

    const handleSave = () => {
        localStorage.setItem('password', updatedPassword);
        localStorage.setItem('email', updatedEmail);
        localStorage.setItem('phonenumber', updatedPhoneNumber);

        setIsEditMode(false);
        setMember({...member, password: updatedPassword, email: updatedEmail, phonenumber: updatedPhoneNumber });
        alert('수정되었습니다.');
    };

  
    if (!member) {
        return <div>Loading...</div>;
    }

    return (
        <div id='Wrap'>
            <div className="bg">
                <h2>마이페이지</h2>
                <div> 
                    <label htmlFor="username">아이디</label>
                    <input type="" placeholder={member.username} />
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" name="password" value={updatedPassword}
                        onChange={(e) => setUpdatedPassword(e.target.value)} />
                    <label htmlFor="email">이메일</label>
                    <input type="email" id="email" name="email" value={updatedEmail} placeholder={member.email} onChange={(e) => setUpdatedEmail(e.target.value)} />
                    <label htmlFor="phonenumber">전화번호</label>
                    <input type="text" id="phonenumber" name="phonenumber" value={updatedPhoneNumber} placeholder={member.phonenumber} onChange={(e) => setUpdatedPhoneNumber(e.target.value)} />
                        <br />
                    <button className='Btn' type="button" onClick={handleSave}>저장</button>
                </div>
            </div>  
        </div>
    );
}
