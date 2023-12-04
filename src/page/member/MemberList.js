import React, {useContext, useEffect, useState} from 'react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Spinner,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {LoginContext} from "../../component/LoginProvider";

function MemberList(props) {
    const [memberList, setMemberList] = useState(null);

    const navigate = useNavigate();
    const {authCheck} = useContext(LoginContext);

    useEffect(() => {
        if (authCheck() !== "admin") {
            navigate("/")
        }

        axios.get("/api/member/list")
            .then(({data})=> {
                setMemberList(data);
            });
    }, []);


    if (memberList === null) {
        return <Spinner />
    }

    function handleMemberClick(id) {
        const params = new URLSearchParams;
        params.set("id", id);

        navigate("/member/view?" + params);
    }

    return (
        <Box>
            <h1>memberList</h1>
            {/*<MemberSearchComp />*/}
            <Table>
                <Thead>
                <Tr>
                    <Th>id</Th>
                    <Th>password</Th>
                    <Th>nickName</Th>
                    <Th>birthday</Th>
                    <Th>phone</Th>
                    <Th>email</Th>
                    <Th>auth</Th>
                    <Th>inserted</Th>
                </Tr>
                </Thead>
                <Tbody>
                {memberList.map((member) => (
                    <Tr key={member.id}
                    onClick={()=> handleMemberClick(member.id)}>
                        <Td>{member.id}</Td>
                        <Td>{member.password}</Td>
                        <Td>{member.nickName}</Td>
                        <Td>{member.birthday}</Td>
                        <Td>{member.phone}</Td>
                        <Td>{member.email}</Td>
                        <Td>{member.auth}</Td>
                        <Td>{member.inserted}</Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
        </Box>
    );
}

function MemberSearchComp() {
    const [keyword, setKeyword] = useState("");

    const navigate = useNavigate();

    function handleMemberSearch() {
        const params = new URLSearchParams();
        params.set("k", keyword)

        navigate("/member/list?"+params)
    }

    return <Box>
        <FormControl>
            <FormLabel>멤버 조회</FormLabel>
            <Flex>
                <Input />
                <Button>검색</Button>
            </Flex>
        </FormControl>
    </Box>;
}

export default MemberList;