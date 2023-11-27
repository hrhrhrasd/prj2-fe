import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import {
  Map,
  MapMarker,
  useKakaoLoader,
  ZoomControl,
} from "react-kakao-maps-sdk";

export function DsList() {
  const [list, setList] = useState(null);
  const [position, setPosition] = useState();

  const [level, setLevel] = useState();
  useEffect(() => {
    axios.get("/api/ds/list?category=drugStore").then((r) => setList(r.data));
  }, []);
  // const [loading, error] = useKakaoLoader({
  //   appkey: process.env.REACT_APP_KAKAO_KEY,
  // });

  return (
    <Box>
      <Box>
        <Heading>약국 리스트</Heading>
        <Box>
          <Table>
            <Thead>
              <Tr>
                <Th>약국이름</Th>
                <Th>전화번호</Th>
              </Tr>
            </Thead>
            <Tbody>
              {list &&
                list.map((ds) => (
                  <Tr key={ds.id}>
                    <Td>{ds.name}</Td>
                    <Td>{ds.phone}</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </Box>
      </Box>

      {/*<Box>*/}
      {/*  {list &&*/}
      {/*    list.map((m) => (*/}
      {/*      <Map*/}
      {/*        key={m.id}*/}
      {/*        center={{ lat: 36.503232, lng: 127.269971 }}*/}
      {/*        style={{ width: "100%", height: "900px" }}*/}
      {/*        level={5}*/}
      {/*        onZoomChanged={(m) => setLevel(m.getLevel())}*/}
      {/*        onDragEnd={(m) =>*/}
      {/*          setPosition({*/}
      {/*            lat: m.getCenter().getLat(),*/}
      {/*            lng: m.getCenter().getLng(),*/}
      {/*          })*/}
      {/*        }*/}
      {/*      >*/}
      {/*        <MapMarker position={{ lat: m.lat, lng: m.lng }} />*/}
      {/*        <ZoomControl />*/}
      {/*      </Map>*/}
      {/*    ))}*/}
      {/*</Box>*/}
    </Box>
  );
}
