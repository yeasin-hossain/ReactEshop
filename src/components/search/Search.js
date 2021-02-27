import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const Search = (SearchOption) => (
    <Form inline className="my-5 d-flex justify-content-center">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input
                type="text"
                placeholder="Gold, Bag"
                onChange={(e) => SearchOption.SearchOption(e.target.value)}
            />
        </FormGroup>
        <Button>Submit</Button>
    </Form>
);

export default Search;
