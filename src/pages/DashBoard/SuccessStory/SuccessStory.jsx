import React from 'react';

import { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";

const SuccessStory = () => {
    const [stories, setStories] = useState([]);
    const [selectedStory, setSelectedStory] = useState(null);
    const [openModal, setOpenModal] = useState(false);
  
    useEffect(() => {
      fetch("http://localhost:5000/successStories")
        .then((res) => res.json())
        .then((data) => setStories(data))
        .catch((error) =>
          console.error("Error fetching success stories:", error)
        );
    }, []);
  
    const openStoryModal = (story) => {
      setSelectedStory(story);
      setOpenModal(true);
    };
  
    const closeStoryModal = () => {
      setOpenModal(false);
      setSelectedStory(null);
    };
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Success Stories</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Male Biodata ID</th>
              <th className="border px-4 py-2">Female Biodata ID</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((story) => (
              <tr key={story._id}>
                <td className="border px-4 py-2">{story.maleBiodataId}</td>
                <td className="border px-4 py-2">{story.femaleBiodataId}</td>
                <td className="border px-4 py-2">
                  <Button  gradientMonochrome="info"
                    onClick={() => openStoryModal(story)}
                    color="blue"
                    className="px-4 py-2"
                  >
                    View Story
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {selectedStory && (
          <Modal show={openModal} onClose={closeStoryModal}>
            <Modal.Header>Success Story</Modal.Header>
            <Modal.Body>
              <p>
                <strong>Male ID:</strong> {selectedStory.maleBiodataId}
              </p>
              <p>
                <strong>Female ID:</strong> {selectedStory.femaleBiodataId}
              </p>
              <p>
                <strong>Story:</strong> {selectedStory.story}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={closeStoryModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  };

export default SuccessStory;