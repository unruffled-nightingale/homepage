#!/usr/bin/env python3
"""Convert .mov files to .mp4 format using ffmpeg."""

import argparse
import subprocess
import sys
from pathlib import Path


def convert_mov_to_mp4(input_path: str, output_path: str | None = None) -> None:
    """
    Convert a .mov file to .mp4 format.
    
    Args:
        input_path: Path to the input .mov file
        output_path: Optional path for the output .mp4 file.
                     If not provided, uses the same name with .mp4 extension.
    """
    input_file = Path(input_path)
    
    if not input_file.exists():
        print(f"Error: Input file '{input_path}' does not exist.")
        sys.exit(1)
    
    if input_file.suffix.lower() != ".mov":
        print(f"Warning: Input file doesn't have .mov extension: {input_file.suffix}")
    
    if output_path is None:
        output_file = input_file.with_suffix(".mp4")
    else:
        output_file = Path(output_path)
    
    print(f"Converting: {input_file} -> {output_file}")
    
    cmd = [
        "ffmpeg",
        "-i", str(input_file),
        "-c:v", "libx264",      # H.264 video codec
        "-c:a", "aac",          # AAC audio codec
        "-preset", "medium",    # Encoding speed/quality tradeoff
        "-crf", "23",           # Quality (lower = better, 18-28 is typical)
        "-y",                   # Overwrite output without asking
        str(output_file)
    ]
    
    try:
        subprocess.run(cmd, check=True)
        print(f"Successfully converted to: {output_file}")
    except subprocess.CalledProcessError as e:
        print(f"Error during conversion: {e}")
        sys.exit(1)
    except FileNotFoundError:
        print("Error: ffmpeg not found. Please install ffmpeg:")
        print("  macOS: brew install ffmpeg")
        print("  Ubuntu: sudo apt install ffmpeg")
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(
        description="Convert .mov files to .mp4 format"
    )
    parser.add_argument(
        "input",
        help="Path to the input .mov file"
    )
    parser.add_argument(
        "-o", "--output",
        help="Path for the output .mp4 file (optional)"
    )
    
    args = parser.parse_args()
    convert_mov_to_mp4(args.input, args.output)


if __name__ == "__main__":
    main()

