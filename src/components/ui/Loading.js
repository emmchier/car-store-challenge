import React from 'react';

export const Loading = () => {
    return (
        <div className="overlay alignX">
            <div className="spinners-content">
                <div class="spinner-grow loading-item" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow loading-item" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow loading-item" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}
